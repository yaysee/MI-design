import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const TopLine = styled.h1`
font-size: 22px;
padding: 20px 30px;
font-weight: 600;
color: #B73F3F;
border-bottom: 1px solid #bfbfbf;

`

export const MainWrapper = styled.div`
display: fixed;
padding: 0 10px;
min-height: 100vh;
align-items: center;
justify-content: center;
background: #fff;

`

export const FormWrapper = styled.div`
width: 720px;
background: #fff;
border-radius: 5px;
border: 2px solid #bfbfbf;

@media screen and (max-width: 820px) {
  float: none;
  width: 100%;
}

`
export const MainForm = styled.form`
margin: 50px 35px;



@media screen and (max-width: 820px) {
  float: none;
  
}

`

export const Form1 = styled.form`

`

export const Grid_A = styled.form`
display: flex;
flex-wrap: wrap;
width: 300px;
gap: 10px 0px;
float: left;
margin-bottom: 50px;

@media screen and (max-width: 820px) {
  float: none;
  width: 54%;
}

`

export const Grid_B = styled.form`
display: flex;
flex-wrap: wrap;
width: 200px;
gap: 10px 0px;
float: center;
padding-left: 40px;
margin-bottom: 50px;

@media screen and (max-width: 820px) {
  float: none;
  width: 50%;
  margin-left: -40px

}

`


export const Email = styled.div`


`
export const Phone = styled.div`


`

export const FirstName = styled.div`



`
export const SecondName = styled.div`


`

export const FirstNameInput = styled.input`
height: 50px;
width: 148%;
outline: none;
border: 1px solid #bfbfbf;
border-radius: 5px;
padding: 12px 20px;



&::-webkit-input-placeholder {
    position: fixed;
    left: 20px;
    top: 15px;
  }

&:focus {
    outline: none;
    border: 2px solid;
    border-color: red;
  }

`
export const SecondNameInput = styled.input`
height: 50px;
width: 148%;
outline: none;
border: 1px solid #bfbfbf;
border-radius: 5px;
padding: 12px 20px;

&::-webkit-input-placeholder {
    position: fixed;
    left: 20px;
    top: 15px;
  }

&:focus {
    outline: none;
    border: 2px solid;
    border-color: red;
  }

`
export const EmailInput = styled.input`
height: 50px;
width: 199%;
outline: none;
border: 1px solid #bfbfbf;
border-radius: 5px;
padding: 12px 20px;

&::-webkit-input-placeholder {
    position: fixed;
    left: 20px;
    top: 15px;
  }

&:focus {
    outline: none;
    border: 2px solid;
    border-color: red;
  }

`
export const PhoneInput = styled.input`
height: 50px;
width: 199%;
outline: none;
border: 1px solid #bfbfbf;
border-radius: 5px;
padding: 12px 20px;


&::-webkit-input-placeholder {
    position: fixed;
    left: 20px;
    top: 15px;
  }

&:focus {
    outline: none;
    border: 2px solid;
    border-color: red;
  }

::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
}
::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
}    

`
export const MessageInput = styled.input`
height: 200px;
width: 101%;
outline: none;
padding: 10px 5px 160px;
border: 1px solid #bfbfbf;
border-radius: 5px;

&:focus {
    outline: none;
    border: 2px solid;
    border-color: red;
  }


  @media screen and (max-width: 820px) {
    float: none;
    width: 80%;
    
  }

`
export const Message = styled.div`
margin-bottom: 40px;
`




export const ButtonArea = styled.div`

`

export const Submit = styled.button`
font-size: 18px;
border: none;
color: #fff;
cursor: pointer;
border-radius: 5px;
background: #B73F3F;
padding: 13px 25px;

`

export const SendingMessage = styled.span`
padding: 10px 40px 160px;
color: #0D6EFD;
display: none;

@media screen and (max-width: 820px) {
padding: 0px 9px 160px;
  
}


`