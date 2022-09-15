import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube,
    IoCaretUpCircle,
    IoMail,
    IoCall,
    IoLogIn,
    IoPerson,
    IoLogOut,
    IoMenu,
    IoClose,
    IoCut
} from "react-icons/io5";

export const getIcon = (iconName, isBig)=>{
    const getStyle={
        fontSize: '30px'
    }
    switch(iconName) {
        case 'instagram' : return (<IoLogoInstagram/>);
        case 'facebook' : return (<IoLogoFacebook/>);
        case 'youtube' : return (<IoLogoYoutube />);
        case 'caretUp' : return (<IoCaretUpCircle style={isBig ? getStyle : ''}/>);
        case 'mail': return (<IoMail />);
        case 'call': return (<IoCall />);
        case 'login': return (<IoLogIn style={isBig ? getStyle : ''}/>);
        case 'person': return (<IoPerson style={isBig ? getStyle : ''}/>);
        case 'logout': return (<IoLogOut style={isBig ? getStyle : ''}/>);
        case 'menu': return (<IoMenu style={isBig ? getStyle : ''}/>);
        case 'cross': return (<IoClose style={isBig ? getStyle : ''}/>);
        case 'cut': return (<IoCut style={isBig ? getStyle : ''}/>);
        default: return null;
    }
};

