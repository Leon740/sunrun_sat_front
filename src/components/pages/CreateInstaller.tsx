import { useState } from 'react';
import { IEmployee, TEmployeePosition } from '@/types';
import { useEmployeeContext } from '@/contexts';
import { APIS } from '@/constants';
import { useAxios } from '@/hooks';
import { Avatar } from '@/components/general';
import {
  Input,
  Group,
  PositionSelect,
  CrewSelect,
  Status,
  FormButton,
  TOption
} from '@/components/form';

export default function CreateInstaller() {
  // managerContext
  const { employee: manager } = useEmployeeContext();

  // name
  type TName = Pick<IEmployee, 'firstname' | 'lastname'>;

  const [nameSt, setNameSt] = useState<TName>({
    firstname: 'Firstname',
    lastname: 'Lastname'
  });

  const handleNameOnChange = (newName: TName) => {
    setNameSt(newName);
  };

  // employeeId
  type TEmployeeId = IEmployee['employeeId'];
  const [employeeIdSt, setEmployeeIdSt] = useState<TEmployeeId>('');

  const handleEmployeeIdOnChange = (newEmployeeId: TEmployeeId) => {
    setEmployeeIdSt(newEmployeeId);
  };

  // position
  const [positionOptionSt, setPositionOptionSt] = useState<TOption>({
    label: 'Installer',
    value: 'Installer'
  });

  // crew
  const [crewOptionSt, setCrewOptionSt] = useState<TOption>({
    label: 'Select crew',
    value: 'Select crew'
  });

  // _id
  const [idSt, setIdSt] = useState<IEmployee['_id']>('');

  // newEmployee
  const newEmployee: Omit<IEmployee, '_id'> = {
    ...nameSt,
    nickname: nameSt.firstname,
    employeeId: employeeIdSt,
    position: positionOptionSt.value as TEmployeePosition,
    crew: crewOptionSt.label.split(' - ')[0],
    branchId: manager.branchId,
    branchName: manager.branchName
  };

  // handleCreateEmployeeButtonOnClick
  const { status: createEmployeeStatus, triggerRequest: handleCreateEmployeeButtonOnClick } =
    useAxios<IEmployee>({
      query: 'post',
      url: APIS.EMPLOYEE_API_URI(manager.branchId),
      body: newEmployee,
      onSuccess: (data) => {
        setIdSt(data._id);
      }
    });

  return (
    <form className="w-full flex flex-col gap-32">
      <Avatar name={nameSt} handleNameOnChange={handleNameOnChange} isEditable />

      <Group name={'employeeId'}>
        <Input
          id={'employeeId'}
          value={employeeIdSt}
          handleOnChange={handleEmployeeIdOnChange}
          isEditable
        />
      </Group>

      <Group name={'position'}>
        <PositionSelect
          isEditable
          activePositionOption={positionOptionSt}
          setActivePositionOption={setPositionOptionSt}
        />
      </Group>

      <Group name={'crew'}>
        <CrewSelect
          isEditable
          activeCrewOption={crewOptionSt}
          setActiveCrewOption={setCrewOptionSt}
        />
      </Group>

      <Status
        status={createEmployeeStatus}
        errorMessage="Error creating Employee"
        successMessage={`Employee was successfully created. <br /> Copy this id and share it with the employee to SignIn. <br /> ${idSt}`}
        className="mt-32"
      />

      <FormButton
        type="submit"
        ariaLabel="Create"
        bg="bg-white"
        className="mt-32"
        handleOnClick={handleCreateEmployeeButtonOnClick}
        icon="done"
        label="Create"
      />
    </form>
  );
}
