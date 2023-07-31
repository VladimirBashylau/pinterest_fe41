import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { CircularProgress } from "@mui/material";
import { fetchPosts } from "../../store/posts";
import { Link } from "react-router-dom";
import { Routes } from "../../constans/Routes";
import { RootState } from "../../store";
import styled from "styled-components";

const Home = () => {
  const {
    posts,
    loading: isLoading,
    error,
  } = useSelector((state: RootState) => state.posts);

  const searchResult = useSelector((state: any) => state.postSearch.posts);

  const searchState = useSelector((state: any) => state.searchState.search);

  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [page]);

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  if (searchState === "closed") {
    return (
      <>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Wrapper>
              <Container>
                {posts.map((post: any) => (
                  <Link to={Routes.PostItem.replace(":id", post.id)}>
                    <Post key={post.id} title={post.title} src={post.image} />
                  </Link>
                ))}
              </Container>
            </Wrapper>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Wrapper>
              <Container>
                {searchResult.map((post: any) => (
                  <Link to={Routes.PostItem.replace(":id", post.id)}>
                    <Post key={post.id} title={post.title} src={post.image} />
                  </Link>
                ))}
              </Container>
            </Wrapper>
          </>
        )}
      </>
    );
  }
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  overflow: hidden;
`;

const Container = styled.div`
  column-count: 6;
  column-gap: 15px;
  background-color: white;
  @media (max-width: 360px) {
    column-count: 1;
    max-width: 380px;
  }
  @media (min-width: 360px) and (max-width: 755px) {
    column-count: 2;
    max-width: 504px;
  }
  @media (min-width: 756px) and (max-width: 1007px) {
    column-count: 3;
    max-width: 756px;
  }
  @media (min-width: 1008px) and (max-width: 1259px) {
    column-count: 4;
    max-width: 1008px;
  }
  @media (min-width: 1260px) and (max-width: 1511px) {
    column-count: 5;
    max-width: 1260px;
  }
  @media (min-width: 1512px) and (max-width: 1763px) {
    column-count: 6;
    max-width: 1512px;
  }
`;
