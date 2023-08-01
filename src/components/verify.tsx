import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { authService } from "../services/auth";
import { Routes } from "../constans/Routes";
import { styled } from "styled-components";

const Verify = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const params = useParams();

  const activeUser = async () => {
    try {
      await authService.verifyEmail({
        uid: params.uid || "",
        token: params.token || "",
      });

      setIsSuccess(true);
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    activeUser();
  }, []);

  return (
    <VerifyWrap>
      {isSuccess ? (
        <div className="success">
          <div className="successText">Verification has been passed</div>
          <Link className="linkToHome" to={Routes.Home}>
            Home
          </Link>
        </div>
      ) : (
        <div className="error">Something went wrong</div>
      )}
    </VerifyWrap>
  );
};

const VerifyWrap = styled.div`
  margin: 100px 38%;
  .success {
    display: flex;
    flex-direction: column;
    width: 400px;
  }
  .linkToHome {
    text-decoration: none;
    padding-left: 120px;
    margin-top: 100px;
    width: 100px;
    font-size: 25px;
    color: red;
    text-transform: uppercase;
  }
  .successText {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export default Verify;
