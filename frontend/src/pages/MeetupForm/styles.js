import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 880px;
  margin: 50px auto;
  border: 0px solid green;
  @media (max-width: 880px) {
    padding: 0 30px;
  }
  @media (max-width: 360px) {
    padding: 0 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      width: 100%;
      background: #1f1b26;
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #fff;
      margin: 10px 0 0px;
      font-size: 16px;
      resize: none;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    textarea {
      height: 200px;
      font: 16px 'Roboto', sans-serif;
      padding: 15px;
    }
    @media (max-width: 530px) {
      input,
      textarea {
        font-size: 16px;
        height: 44px;
      }
      textarea {
        height: 130px;
      }
    }
    span {
      font: 16px 'Roboto', sans-serif;
      color: #fb6f91;
      padding-left: 15px;
      margin: 2px 0 5px;
    }
    .divActionsButton {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .react-datepicker__input-container {
      width: 100%;
    }
    .react-datepicker {
      padding: 1px;
      border: 2px solid #fff;
      box-shadow: 12px 15px 20px rgba(0, 0, 0, 0.05);
    }
    .react-datepicker__header {
      border-bottom: none;
      background: #f64c75;
      border-radius: 4px;
    }
    .react-datepicker__navigation--previous {
      border-right-color: #fff;
    }
    .react-datepicker__navigation--next {
      border-left-color: #fff;
    }
    .react-datepicker-popper[data-placement^='top']
      .react-datepicker__triangle {
      border-top-color: #fff;
      bottom: -1px;
    }
    .react-datepicker__current-month {
      color: #fff;
    }
    .react-datepicker-time__header {
      color: #fff;
    }
    .react-datepicker__time-container {
      border-left: none;
      margin-left: 2px;
    }
    .react-datepicker__day-name {
      color: #fff;
    }
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--selected {
      background: #f64c75;
      border-radius: 50%;
      font-weight: bold;
    }
    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item--selected {
      background-color: #f64c75;
    }
    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item {
      height: 28px;
      padding: 5px 0px;
      border-radius: 4px;
    }
    .react-datepicker__time,
    .react-datepicker__time-box {
      border-bottom-right-radius: 4px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  margin-top: 15px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #f64c75;
  &:hover {
    background: ${darken(0.06, '#f64c75')};
  }
  @media (max-width: 375px) {
    width: 96%;
    font-size: 16px;
    height: 38px;
  }
`;
