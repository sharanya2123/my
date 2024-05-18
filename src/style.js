import styled from 'styled-components'

export const MainContainer = styled.div``

export const TaskInputContainer = styled.form`
   display: flex'
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 20px;
   height: 100vh;
   width: 35vh;
   background-color: #1a171d;
`
export const TaskDisplayContainer = styled.div``

export const Heading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
  margin: 20px;
`
export const InputContainer = styled.div``

export const LabelText = styled.label``

export const Input = styled.input``

export const Select = styled.select`
  height: 45px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  padding: 10px;
  outline: none;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 20px;
`
export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  height: 45px;
  width: 150px;
  border-radius: 5px;
  margin: 20px;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const TagsHeading = styled.h1``

export const NoTaskText = styled.p``

export const TagsContainer = styled.ul``

export const TagsButton = styled.button`
   background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
   borderL 1px solid #f3aa4e;
   border-radius: 20px;
   height: 45px;
   padding-left: 10px;
   padding:-right: 10px;
   margin: 5px;
   font-weight: 500;
   font-sixe: 16px;
   outline: none;
   text-align: center;
`
export const TagListItem = styled.li``

export const TasksContainer = styled.ul``
