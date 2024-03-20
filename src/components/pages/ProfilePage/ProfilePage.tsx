import { Button } from 'components/common';
import { useState } from 'react';
import { ModalEditProfile } from './components/ModalEditProfile';

export function ProfilePage() {
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleEdit}>Edit profile</Button>
      <ModalEditProfile isOpen={open} setOpen={setOpen} />
    </>
  );
}
