import React, {Fragment} from 'react';
import SocialMeta from './social';


describe('<SocialMeta /> regression', ()=> {
  it('renders tags', ()=> {
    expect(
      <SocialMeta
        title="test-title"
        description="test-description"
        appUrl="test-url/"
      />
    ).toMatchElem(
      <Fragment>
        <title>test-title</title>

        <meta name="author" content="Nick Manks" />
        <meta name="title" content="test-title" />
        <meta name="description" content="test-description" />
        <meta
          name="keywords"
          content="React, App, Todo, Awesome"
        />
        <link rel="shortcut icon" href="favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@todoawesome" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nick Manks" />
        <meta property="og:title" content="test-title" />
        <meta property="og:description" content="test-description" />

        <meta property="og:image" content="test-url/share-img.jpg" />
        <meta property="og:url" content="test-url/" />

        <meta itemProp="name" content="test-title" />
        <meta itemProp="description" content="test-description" />
        <meta itemProp="image" content="test-url/share-img.jpg" />

        <meta name="robots" content="all" />
        <meta name="rating" content="General" />
        <meta name="copyright" content="&copy; todoawesome.com" />

        <meta name="pinterest" content="nopin" />
      </Fragment>
    );
  });
});
