
import MyImages from '../Container/MyImages';
import Signup from '../Container/Signup';
import PATH from './../Config/webPath';
import Home from './../Container/Home';
import Login from './../Container/Login';

const Routes=[
    {exact:true,path:PATH.HOME,component:Home},
    {exact:true,path:PATH.SIGNUP,component:Signup},
    {exact:true,path:PATH.LOGIN,component:Login},
    {exact:true,path:PATH.MYIMAGE,component:MyImages}

]
export default Routes