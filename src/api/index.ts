
const BASE_URL = "https://datetechapp-back.herokuapp.com";

const saveTokensToLocalStorage = (tokens: any) => {
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
       const response = await post("/api/token/refresh/", { refresh: refreshToken });
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


const post = async (url: string, body: Record<string, any>, isAuthorization: boolean = false) => {
       const fullUrl = new URL(url, BASE_URL);
       const accessToken = getAccessToken();
       const headers: { [key: string]: string } = {
              "Content-Type": "application/json",
       };

       if (isAuthorization) {
              headers["Authorization"] = `Bearer ${accessToken}`;
       }

       return fetch(fullUrl.toString(), {
              method: "POST",
              mode: "cors",
              body: JSON.stringify(body),
              headers,
       })
};

export const createPassword = (body: { password: string, confirm_password: string }): Promise<{ genders: Record<string, string>, purposes: Record<string, string>, sex: Record<string, string>, discription_gender: Record<string, string> }> =>
       post("/registration/second_step/", body).then(response => response.json());

export const registration = (body: { username: string, password: string, confirm_password: string }): Promise<Response> =>
       post("/registration/first_step/", body)

export const checkVerificationCode = (body: { passcode: string }): Promise<Response> =>
       post("/registration/email_confirmation/", body)

export const createProfileForPhoto = (body: { photo: string | null }): Promise<Response> =>
       post("/upload/image/", body)

export const createProfileForVideo = (body: { video: string | null }): Promise<Response> =>
       post("/upload/video/", body)

export const createProfile = (body: { name: string, date_of_birth: string, gender: string, sex: string, purposes: string[], is_agree_geo: boolean, app_agreement: boolean }): Promise<Response> =>
       post("/registration/third_step/", body)
              .then(response => {
                     if (response.ok) {
                            return response.json().then(data => {
                                   const tokens = {
                                          access: data.access,
                                          refresh: data.refresh,
                                   };
                                   saveTokensToLocalStorage(tokens);
                                   return response;
                            });
                     } else if (response.status === 401) {
                            return refreshAccessToken()
                                   .then(refreshResponse => {
                                          if (refreshResponse.ok) {
                                                 return createProfile(body);
                                          }
                                          return response;
                                   });
                     }
                     return response;
              });

export const login = (body: { username: string, password: string, rememberLogin: boolean }): Promise<Response> =>
       post("/login", body).then(response => response.json());


