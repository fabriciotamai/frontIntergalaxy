import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width:300px;
    height:60px;
    background:#7400ca;
    border-radius:10px;
    margin-top:8px;
    
    justify-content:center;
    align-items:center;

`;

export const ButtonText = styled.Text`
font-family:'RobotoSlab-Medium';
color:#f4ede8;
font-size:16px;


`;
