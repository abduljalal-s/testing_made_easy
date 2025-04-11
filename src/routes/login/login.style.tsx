import styled from "styled-components";
import { Icon } from "@iconify/react";

export const GoogleIcon = styled(Icon)`
  font-size: 2rem;
  padding: 0 0.5rem;
  @media (max-width: 660px) {
    font-size: 1.5rem;
  }
  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
  @media (max-width: 370px) {
    font-size: 1rem;
  }
`;

export const LoginDiv = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #2e266f;
  border-radius: 20px;
  padding: 2rem;
  z-index: 10;
`;
export const DontHaveAccout = styled.h4`
  color: #2e266f;
  font-size: 1.2rem;

  & span {
    color: #fe043c;

    cursor: pointer;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
export const FormFieldLabels = styled.p`
  font-size: 1.3rem;
  font-family: "Exo", sans-serif;
  color: #2e266f;
  text-align: left;
  margin-bottom: 0;
  @media (max-width: 660px) {
    font-size: 1.2rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
export const FormInputs = styled.input`
  height: 2.3rem;
  width: 25rem;
  outline: none;
  font-size: 1.1rem;
  font-family: "Exo", sans-serif;
  border-radius: 10px;
  color: #2e266f;
  @media (max-width: 660px) {
    height: 2rem;
    font-size: 1rem;
    width: 20rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
    width: 17rem;
    height: 1.8rem;
  }
  @media (max-width: 370px) {
    font-size: 1rem;
    width: 14rem;
    height: 1.5rem;
  }
  @media (max-width: 315px) {
    width: 12rem;
  }
`;
export const SignInwithgoogleTextDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 660px) {
    font-size: 1.2rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
  @media (max-width: 370px) {
    font-size: 0.8rem;
  }
`;
export const Or = styled.p`
  color: #2e266f;
  font-size: 1.2rem;
`;
