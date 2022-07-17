import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #000;
    width: 300px;
    margin: 20px 0;
    cursor:pointer;
    display: flex;
    justify-content:space-around;
    

    img {
        width:50%;
        height: 50%;
        border: 1px solid #324;
        position:absolute;
    }
    h2, small{
        font-weight: 800;
        text-align: center;
        z-index:10;
    }



`