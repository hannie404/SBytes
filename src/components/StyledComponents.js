import styled from 'styled-components';

export const GlobalStyles = styled.div`
    font-family: 'Mulish', sans-serif;

    :root {
        --primary: #4978F0;
        --primary-light: #E1EEF5;
        --secondary: #1D1D1D;
        --background: #F4F1FF;
        --text: #1F2346;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const LoginWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 4fr 3fr;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        height: 100vh;
    }
`;

export const LoginSide = styled.div`
    padding: 188px 32px 48px 32px;
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const InfoSide = styled.div`
    height: 100vh;
    padding: 84px 48px 48px 32px;
    color: #401B3D;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--background);

    h2 {
        margin-top: 48px;
        color: var(--text);
        font-size: 1.8rem;
        margin-bottom: 12px;
    }

    p {
        font-size: 1.2rem;
    }

    img {
        max-width: 860px;
    }
`;

export const SocialsRow = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    img {
        width: 24px;
        height: 24px;
    }

    a {
        padding: 8px;
        border-radius: 8px;
        width: 100%;
        min-height: 48px;
        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 1.1rem;
        color: var(--text);
        padding: 8px;
        border: 1px solid var(--primary-light);
        font-weight: 700;

        &:hover {
            border: 1px solid var(--primary);
        }
    }
`;

export const Divider = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--secondary);
    gap: 16px;
    align-items: center;
`;

export const DividerLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--secondary);
    opacity: .2;
`;

export const Logo = styled.img`
    height: 48px;
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    max-width: 460px;
    width: 100%;
    padding: 48px 32px;
    height: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    gap: 16px;
`;

export const LoginWelcome = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
`;

export const LoginWelcomeRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
`;

export const FormButton = styled.button`
    background-color: var(--primary);
    color: white;
    white-space: nowrap;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    line-height: 50px;
    outline: none;
    font-size: 18px;
    letter-spacing: .025em;
    text-decoration: none;
    cursor: pointer;
    font-weight: 800;
    min-height: 50px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0,0,0,.15);
    transition: all .3s ease;
`;

export const FormActions = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--secondary);
    gap: 16px;
    margin-top: 8px;

    a {
        color: var(--secondary);
        font-weight: 600;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SignUpLink = styled.div`
    display: flex;
    justify-content: center;

    a {
        color: var(--primary);
        font-weight: 800;
        text-decoration: none;
        font-size: 18px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const TextField = styled.div`
    position: relative;

    input {
        color: var(--secondary);
        font-size: 16px;
        font-weight: 500;
        max-width: 100%;
        width: 100%;
        border: 1px solid var(--secondary);
        height: 50px;
        letter-spacing: .03rem;
        background-color: transparent;
        outline: none;
        transition: .25s;
        border-radius: 8px;
        text-indent: 20px;
        margin-top: 8px;

        &:focus {
            border: 1px solid var(--primary);
        }
    }

    img {
        position: absolute;
        right: -2px;
        bottom: -4px;
        width: 30px;
        height: 30px;
        transform: translate(-50%,-50%);
    }

    label {
        color: var(--secondary);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .03rem;
        z-index: 10;
    }
`;
