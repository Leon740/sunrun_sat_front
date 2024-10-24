import { Button, Select, SelectOption, TOption } from '@/components/form';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPosition, ROUTES } from '@/constants';
import { IEmployee } from 'src/types';

interface IEmployeeButtonProps {
  _id: IEmployee['_id'];
  label: IEmployee['nickname'];
  color: IPosition['color'];
}

export function EmployeeButton({ _id, label, color }: IEmployeeButtonProps) {
  const navigate = useNavigate();

  const handleDefaultButtonOnClick = () => {
    navigate(`${ROUTES.employee}/${_id}`);
  };

  return (
    <Button
      type="button"
      ariaLabel={`Navigate to ${label}`}
      handleOnClick={handleDefaultButtonOnClick}
      className="w-full"
    >
      <SelectInnerOption label={label} className={`rounded-8 ${color}`} />
    </Button>
  );
}

interface ISelectInnerOptionProps {
  label: string;
  className: string;
}

function SelectInnerOption({ label, className }: ISelectInnerOptionProps) {
  return (
    <div
      className={`cursor-pointer w-full text-16 text-dark_navy font-roobert_regular text-left py-8 px-16 border-light_navy ease-in-out duration-300 ${className}`}
    >
      {label}
    </div>
  );
}

interface IEmployeePositionSelectProps {
  employees: IEmployee[];
  crew: IEmployee['crew'];
  color: IPosition['color'];
  title: IPosition['title'];
  handleOnChange: (
    prevId: IEmployee['_id'],
    newId: IEmployee['_id'],
    crew: IEmployee['crew']
  ) => void;
  isEditable: boolean;
}

export function EmployeePositionSelect({
  employees,
  crew,
  color,
  title,
  handleOnChange,
  isEditable = false
}: IEmployeePositionSelectProps) {
  // options
  const employeesOptions = employees.map((employee) => ({
    value: employee._id,
    label: employee.nickname
  }));

  // emptyOption
  const emptyOption = {
    value: '',
    label: 'Add'
  };

  const options: TOption[] =
    title === 'Foreman' || title === 'Lead' ? employeesOptions : [emptyOption, ...employeesOptions];

  // defaultOption
  const defaultOption = useMemo(() => {
    const defaultEmployee = employees.find((employee) => employee.crew === crew);

    return defaultEmployee
      ? { value: defaultEmployee._id, label: defaultEmployee.nickname }
      : emptyOption;
  }, [employees, crew]);

  // onChange
  const [activeOptionSt, setActiveOptionSt] = useState<TOption>(defaultOption);

  useEffect(() => {
    if (activeOptionSt.value !== defaultOption.value) {
      handleOnChange(defaultOption.value, activeOptionSt.value, crew);
    }
  }, [activeOptionSt]);

  return (
    <div className="basis-128">
      {isEditable ? (
        <Select
          isUpdatesBetweenRenders
          options={options}
          defaultOption={defaultOption}
          setActiveOption={setActiveOptionSt}
          renderActiveOption={(activeOption) => (
            <SelectInnerOption label={activeOption.label} className={`border-t-0 ${color}`} />
          )}
          renderOptions={(options) =>
            options.map((option) => (
              <SelectOption key={`${option.value}_Option_Employee_${title}_Select`} option={option}>
                <SelectInnerOption
                  label={option.label}
                  className="border-t-2 bg-sky_blue hover:bg-light_navy"
                />
              </SelectOption>
            ))
          }
        />
      ) : (
        <EmployeeButton _id={defaultOption.value} label={defaultOption.label} color={color} />
      )}
    </div>
  );
}
