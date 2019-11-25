import React, { useState } from "react";
import Icon from "../lib/Icon";
import "../styles/intake.css";
import { Link } from "react-router-dom";

function Intake(props) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let err = false;

    if (password !== "") {
      if (password !== confirm) {
        err = true;
        setPasswordError("Password cannot be blank");
      } else {
        setPasswordError("Password");
      }
    }

    if (confirm !== "") {
      if (password !== confirm) {
        err = true;
        setConfirmError("Password must match");
      } else {
        setConfirmError("Confirm Password");
      }
    } else {
      err = true;
      setConfirmError("Confirm Password - Must match the password");
    }

    if (!err) {
      console.log("Submitted");
      props.history.push("ShareForm");
    } else {
      console.log("not submitted");
    }
  }

  return (
    <>
      <header>
        <h3>
          <Icon icon="angle-double-left"></Icon> Want to start empowering other
          women? <Icon icon="angle-double-right"></Icon>
        </h3>
      </header>

      <p className="newAcct">Create your account now!</p>

      <div className="intake">
        <div className="intakePrompt">
          <aside>
            <p className="prompt">
              Hey girl! <br /> <br />
              We're so excited for you to be apart of our growing family. But
              first, we want to get to know you a little better. Create your
              account to begin sharing your story.{" "}
            </p>{" "}
            <br /> <br />
            <p className="signature"> &hearts; Team EmpowHER</p>
          </aside>
        </div>

        <div className="intakeForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="Fname">Name</label>
            <input type="text" required></input>

            <label htmlFor="Lname">Last Name</label>
            <input type="text" required></input>

            <label htmlFor="username">Username</label>
            <input type="text" required></input>

            <label htmlFor="password">Password</label>
            <input
              className={passwordError === "" ? "" : "error"}
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="at least 8 characters"
              value={password}
            ></input>

            <label htmlFor="confirm">Confirm Password</label>
            <input
              className={confirmError === "" ? "" : "error"}
              onChange={e => setConfirm(e.target.value)}
              type="password"
              placeholder="password must match"
              value={confirm}
            ></input>

            <label htmlFor="email">Email</label>
            <input type="email" required></input>

            <div className="userLinks">
              <button className="createNew" type="submit">
                Start Empowering!
              </button>{" "}
              <p className="login">
                {" "}
                Already have an account?
                <Link to="LoginPage">
                  <div className="SignInLink">Sign in</div>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Intake;
