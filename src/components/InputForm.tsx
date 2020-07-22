import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { IoIosAdd } from 'react-icons/io';
import { useStoresState, useStoresDispatch, addStore } from 'lib/useAsync';
import LoadingForm from './LoadingForm';


const FormContainer = styled.div`
    display: flex;
    flex-flow: column;
    background: white;
    min-height: 30rem;
    justify-content:center;
    align-items: center;
    box-sizing:border-box;
    padding-top:50px;
    h2{
        font-weight:700;
        font-size: 1.25rem;
        user-select:none;
    }
`

const Form = styled.form`
    position:relative;
    display: flex;
    flex-flow: column;

    justify-content: center;
    align-items: center;

    width: 400px;
    padding: 3rem;
    box-sizing:border-box;
    *{
         margin-bottom:10px;
    }
`
const Input = styled.input`
    min-height:3rem;
    width: 100%;
    border-radius: 5px;
    border:2px solid transparent;
    background: ${oc.gray[2]};
    padding:8px;
    box-sizing:border-box;
    &::placeholder{
        /* */
    }
    :focus{
        border:2px solid ${oc.gray[5]};
        outline:none;
    }
    :required{
        border:2px soid ${oc.red[5]}
    }
`
const SubmitButton = styled.button`
    width: 4rem;
    height: 4rem;
    margin-top: 100px;
    box-sizing: border-box;

    background: none;
    border: 1px solid ${oc.gray[5]};
    border-radius:50%;
    outline:0;
    
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;

    color: ${oc.gray[5]};
    font-size: 2rem;
    *{
        margin:0;
    }
    :hover{
        background: ${oc.red[5]};
        border: 1px solid ${oc.red[5]};
        color: white;
    }
    :active{
        background: ${oc.red[7]};
        border: 1px solid ${oc.red[7]};
        color: white;
    }
`;

function InputForm() {
    const state = useStoresState();
    const dispatch = useStoresDispatch();
    const { loading, data } = state.postRequst;
    const [defaultValue, setValue] = useState({
        store: "",
        address: ""
    })

    const { store, address } = defaultValue;

    const fetchData = () => {
        addStore(dispatch, store, address);
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData()
        if (data === "created{}") {
            setValue({
                store: "",
                address: ""
            })
        }


    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue({
            ...defaultValue,
            [name]: value
        })
    }
    return (
        <>
            <FormContainer>
                <h2>가게 등록</h2>
                <Form onSubmit={onSubmit}>
                    <Input onChange={onChange} name="store" value={store} autoComplete="off" placeholder="가게 이름" required />
                    <Input onChange={onChange} name="address" value={address} autoComplete="off" placeholder="주소" required />
                    <SubmitButton><IoIosAdd /></SubmitButton>
                </Form>
            </FormContainer>
            {loading && <LoadingForm />}
        </>
    )
}

export default InputForm;