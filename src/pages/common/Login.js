import {useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import '../../css/util.css'
import  '../../css/main.css';
const isClient = (props) =>{
        if (props.hasOwnProperty("token")){
            const detail = {
                "id":props.id,
                "token":props.token
            }
            localStorage.setItem("client",JSON.stringify(detail));
            window.location.href = "/indexCli";
        }else{
            window.location.href = "/indexAdmin";
        }
}
function Login(props) {
    const style={
        color:"red"
    };
    // const user = (props.action===0)?"client":"admin";
    const link = (props.action===0)?BaseUrl+"enchere/cli/login":BaseUrl+"enchere/admin/login";
    let d_email = (props.action===0)?"myranto@gmail.com":"admin@gmail.com";
    let d_mdp = (props.action===0)?"manantsoa02":"admin";
    const [email,setEmail] = useState(d_email);
    const [mdp,setMdp] = useState(d_mdp);
    const [response,setResponse] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const json = {
            "email": email,
            "mdp": mdp
        };
        // console.log(json);
        fetch(
            link,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json),
            }
        )
            .then((response) => response.json())
            .then((res) => {
                // alert(res.data)
                if (res.error!==null){
                    setResponse(res.error)
                }else{
                    isClient(res.data);
                // window.location.href = "/request-profil";
                }
            })
            .catch((error) => {
                console.error(error);
                //TODO implement error
            });
    }
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" onSubmit={handleSubmit}>
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
                            <span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input className="input100" type="email" name="email" value={email}
                                       onChange={(event) => setEmail(event.target.value)}/>
                                <span className="focus-input100" data-placeholder=""></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
                                <input className="input100" type="password" name="pwd" value={mdp}
                                       onChange={(event) => setMdp(event.target.value)}/>
                                <span className="focus-input100" data-placeholder=""></span>
                            </div>
                            <h3 style={style}>{response}</h3>
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn" type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
            );
}



export default Login;