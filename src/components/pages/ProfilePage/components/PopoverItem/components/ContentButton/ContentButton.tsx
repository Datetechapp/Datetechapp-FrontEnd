import { Button } from 'antd';
import { ContentButtonT } from 'components/pages/ProfilePage/types';

export const ContentButton = ({ icon, text }: ContentButtonT) => {
  return (
    <Button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        border: 'none',
        boxShadow: 'none',
        width: '100%',
        padding: '4px 8px',
      }}
    >
      <img src={icon} alt={text} />
      <span>{text}</span>
    </Button>
  );
};
