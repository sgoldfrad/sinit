import react, { useRef } from 'react'
import Page from './Page';


export default function Login(props) {
    const { setIsLogin } = props;
    const username = useRef();
    const password = useRef();

    const change = () => {
        username.current.value &&
            password.current.value &&
            setIsLogin(true) &&
            localStorage.setItem('user', JSON.stringify({ name: username, password: password }));

    }

    return (
        // <div>
        //     {/* !isLogin ?  */}
        //     <div>
        //         <label>name
        //             <input type="text" ref={username} />
        //         </label>
        //         <label>password
        //             <input type="text" ref={password} />
        //         </label>
        //         <button onClick={() => change()}>ok</button>
        //     </div>
        //     {/* // : <Page user={username.current.value} pass={username.current.value}></Page> */}

        // </div>
        <div id="body">
            <div id="login">
                <div id="login">
                    <h3 className="text-center text-white pt-5">Login form</h3>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br />
                                            <input type="text" ref={username} name="username" id="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input type="text" ref={password} name="password" id="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                        </div>
                                        {/* <div id="register-link" class="text-right">
                                <a href="#" class="text-info">Register here</a>
                            </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}