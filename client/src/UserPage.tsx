import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Helmet } from "react-helmet";

interface IUserPageURLParamaters {
  user_name: string;
}

const UserPage: React.FC = () => {
  const { user_name } = useParams<IUserPageURLParamaters>();
  const location = useLocation();
  const [userDescription] = useState<string>(
    "自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介"
  );

  return (
    <div>
      <Helmet>
        <meta property="og:url" content={location.pathname} />
        <meta property="og:title" content="OGP TEST" />
        <meta property="og:description" content={userDescription} />
        <meta property="og:site_name" content="OGP TEST" />
        <meta property="og:image" content="/images/ogp-thumbnail.jpg" />
      </Helmet>
      <p>user_name: {user_name}</p>
    </div>
  );
};
export default UserPage;
