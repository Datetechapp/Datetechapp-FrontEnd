const BASE_URL = 'https://datetechapp-back.herokuapp.com';

export const fetchData = (params: string) => {
     const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${params}`;
     const options = {
          method: 'GET',
          headers: {
               'X-RapidAPI-Key': '07c8b56d83msh8f6a7059d4584a7p1f4428jsn9d5ba337adf1',
               'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
          }
     };

     return fetch(url, options)
          .then(response => response.json());
};


interface Tokens {
     access: string;
     refresh?: string | null;
}

const saveTokensToLocalStorage = (tokens: Tokens) => {
     if (tokens.access && tokens.refresh) {
          localStorage.setItem('accessToken', tokens.access);
          localStorage.setItem('refreshToken', tokens.refresh);
     }
};

const getAccessToken = () => {
     return localStorage.getItem('accessToken');
};

const getRefreshToken = () => {
     return localStorage.getItem('refreshToken');
};

const refreshAccessToken = async () => {
     const refreshToken = getRefreshToken();
     const response = await post('/api/token/refresh/', { refresh: refreshToken });

     if (response.ok) {
          const data = await response.json();
          const tokens = {
               access: data.access,
               refresh: refreshToken,
          };

          saveTokensToLocalStorage(tokens);
     }

     return response;
};

const post = async (
     url: string,
     body?: Record<string, unknown>,
     isAuthorization = false,
) => {
     const fullUrl = new URL(url, BASE_URL);
     const accessToken = getAccessToken();
     const headers: { [key: string]: string } = {
          'Content-Type': 'application/json',
     };

     if (isAuthorization) {
          headers.Authorization = `Bearer ${accessToken}`;
     }

     return fetch(fullUrl.toString(), {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(body),
          headers,
     }).then(response => {
          if (!response.ok) {
               throw new Error(`HTTP error, status code ${response.status}`);
          }
          return response;
     });
};

export const createPassword = (body: {
     password: string;
     confirm_password: string;
}): Promise<{
     genders: Record<string, string>;
     purposes: Record<string, string>;
     sex: Record<string, string>;
     discription_gender: Record<string, string>;
}> => post('/registration/second_step/', body).then((response) => response.json());

export const registration = (body: { username: string, password: string, confirm_password: string }): Promise<Response> =>
     post('/registration/signup/', body);

export const resendCode = (): Promise<Response> => post('/registration/resend-code/');

export const checkVerificationCode = (body: {
     passcode: string;
}): Promise<Response> => post('/registration/confirm-email/', body);

export const createProfileForPhoto = (body: {
     photo: string | null;
}): Promise<Response> => post('/upload/image/', body);

export const createProfileForVideo = (body: {
     video: string | null;
}): Promise<Response> => post('/upload/video/', body);

export const createProfile = (body: {
     name: string;
     date_of_birth: string;
     gender: string;
     sex: string;
     purposes: string[];
     is_agree_geo: boolean;
     app_agreement: boolean;
}): Promise<Response> =>
     post('/registration/third_step/', body).then((response) => {
          if (response.ok) {
               return response.json().then((data) => {
                    const tokens = {
                         access: data.access,
                         refresh: data.refresh,
                    };
                    saveTokensToLocalStorage(tokens);
                    return response;
               });
          }
          if (response.status === 401) {
               return refreshAccessToken().then((refreshResponse) => {
                    if (refreshResponse.ok) {
                         return createProfile(body);
                    }

                    return response;
               });
          }
          return response;
     });

export const login = (body: {
     username: string;
     password: string;
     remember_me: boolean;
}): Promise<Response> =>
     post('/login', body).then((response) => response.json());

