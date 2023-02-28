import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const PhoneForm = styled(Form)`
  width: 400px;
  border: 1px solid #4e504e;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormField = styled(Field)`
  width: 200px;
  height: 20px;
`;

export const BtnForm = styled.button`
  width: 160px;
  padding: 4px;
  font-size: 14px;
`;
export const ErrorMessageForm = styled(ErrorMessage)`
  color: red;
`;
