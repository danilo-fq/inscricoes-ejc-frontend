import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import React from 'react';
import ErrorFormMessage from './ErrorFormMessage';

export type OptionType = { label: string; value: string; cidade?: string; };
export type OptionsType = Array<OptionType>;

type SelectProps = {
  labelDescription: string;
  styleLabel?: React.HTMLAttributes<HTMLLabelElement>['className'];
  selectName: string;
  placeHolder?: string;
  isMulti?: boolean;
  optionsSelect?: OptionsType;
  onChangeSelect?: (
    selected: readonly OptionType[],
    inputName: string,
  ) => void;
  getOptionLabel?: (option: OptionType) => string;
  width?: string;
};

export default function GenericSelect({
  labelDescription,
  styleLabel = '',
  selectName,
  placeHolder = 'Selecione uma opção',
  isMulti = false,
  optionsSelect = [
    { value: 'Sim', label: 'Sim' },
    { value: 'Não', label: 'Não' },
  ],
  onChangeSelect = () => {},
  getOptionLabel = (option) => option.label || '',
}: SelectProps) {
  const { control, formState: { errors } } = useFormContext();

  const error = errors[selectName];

  if (isMulti === true) {
    return (
      <label
        htmlFor={ selectName }
        className={ `text-base font-medium 
        max-w-[459px] max-sm:max-w-[288px] ${styleLabel}` }
      >
        {labelDescription}
        <Controller
          control={ control }
          name={ selectName }
          render={ ({ field }) => (
            <Select
              { ...field }
              id={ selectName }
              isMulti={ isMulti }
              options={ optionsSelect }
              onChange={ (options) => {
                field.onChange(options);
                onChangeSelect(options, field.name);
              } }
              className="w-[459px] max-sm:w-72"
              placeholder={ placeHolder }
              styles={ {
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: '2px solid #D1D5DB',
                  boxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                  rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
                  minHeight: '48px',
                  borderRadius: '8px',
                  color: '#000000',
                }),
                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  fontWeight: '400',
                  color: '#718096',
                }),
              } }
            />
          ) }
        />
        <ErrorFormMessage error={ error } />
      </label>
    );
  }
  return (

    <label
      htmlFor={ selectName }
      className={ `text-base font-medium 
      max-w-[459px] max-sm:max-w-[288px] ${styleLabel}` }
    >
      {labelDescription}
      <Controller
        control={ control }
        name={ selectName }
        render={ ({ field }) => (
          <Select
            classNamePrefix=""
            className="w-[459px] max-sm:w-72"
            { ...field }
            id={ selectName }
            options={ optionsSelect }
            getOptionLabel={ getOptionLabel }
            placeholder={ placeHolder }
            styles={ {
              control: (baseStyles) => ({
                ...baseStyles,
                border: '2px solid #D1D5DB',
                height: '49px',
                boxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
                borderRadius: '8px',
                color: '#000000',
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                fontWeight: '400',
                color: '#9CA3AF',
              }),
            } }
          />
        ) }
      />
      <ErrorFormMessage error={ error } />
    </label>

  );
}
