import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Input from '../Input';
import Modal from '../Modal';
import useCurrentUser from '@/hooks/useCurrentUser';
import useUser from '@/hooks/useUser';
import useEditModal from '@/hooks/useEditModal';
import ImageUpload from '../ImageUpload';

const EditModal = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const editModal = useEditModal();
  const [profileImage, setProfileImage] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
  }, [
    currentUser?.name,
    currentUser?.profileImage,
    currentUser?.coverImage,
    currentUser?.username,
    currentUser?.bio,
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.patch('/api/edit', {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      });
      mutateFetchedUser();

      toast.success('Successfully updated');
      editModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [
    name,
    profileImage,
    coverImage,
    username,
    bio,
    editModal,
    mutateFetchedUser,
  ]);
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <ImageUpload
        onChange={(image) => setProfileImage(image)}
        value={profileImage}
        disabled={isLoading}
        label='Enter Profile URL'
      />
      <ImageUpload
        onChange={(image) => setCoverImage(image)}
        value={coverImage}
        disabled={isLoading}
        label='Enter Cover Image URL'
      />
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
        placeholder='Enter Name'
      />
      <Input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
        placeholder='Enter Username'
      />

      <Input
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        disabled={isLoading}
        placeholder='Enter Bio'
      />
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        title='Create An Account'
        actionLabel='Update User'
        onSubmit={onSubmit}
        body={bodyContent}
      />
    </div>
  );
};

export default EditModal;
