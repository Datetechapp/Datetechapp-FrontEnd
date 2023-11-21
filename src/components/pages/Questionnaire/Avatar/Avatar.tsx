import AvatarEditor from 'react-avatar-editor';

interface AvatarProps {
  image: string;
  scale: number;
  position: { x: number; y: number };
  onPositionChange: (position: { x: number; y: number }) => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  image,
  scale,
  position,
  onPositionChange,
}) => {
  const handlePositionChange = (event: MouseEvent) => {
    const canvas = document.querySelector('.ReactAvatarEditor canvas');

    if (!canvas) return;

    const canvasRect = canvas.getBoundingClientRect();
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;
    const xPos = Math.round((x / canvasRect.width) * 10000) / 100;
    const yPos = Math.round((y / canvasRect.height) * 10000) / 100;

    onPositionChange({ x: xPos, y: yPos });
  };

  return (
    <AvatarEditor
      // className={css.avatarEditor}
      image={image}
      width={186}
      height={186}
      border={0}
      borderRadius={0}
      scale={scale}
      position={position}
      onPositionChange={handlePositionChange}
    />
  );
};
