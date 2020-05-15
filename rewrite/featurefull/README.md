# featurefull

FeatureFull is a lightweight and minimal helper to help create features in your applications.

| NOTE: Currently, this package only works with React. |
| ---------------------------------------------------- |


```
npm install featurefull
```

or with yarn

```
yard add featurefull
```

## Usage

Setting up featurefull should be simple and straightforward

1. Start By Creating your first page: `pages are the root component of every url that you visit. ex: \login might be the login page. In this example, I will be setting up a Dashboard page with a single accounts feature`

```js
import { Page, NullComp } from 'featurefull';

// defaultFeatures is an object of all the defaults you would like on your page. In general, any feature related components won't be enabled by default. For this purpose, we have included a small NullComp which is just a blank components that are default until the main app overrides them
const defaultFeatures = {
	Header: Header,
	Body: Body,
	SideBar: SideBar,
	Accounts: {
		AuthButton: NullComp,
	},
	// etc.
};

// defaultReducers allows adding default reducers that are global to the page. Generally, you will want reducers declared per feature. Therefore, this is usually an empty object
const defaultReducers = {};

// This is the root react component of your page
const RootComponent = () => <h1>Dashboard Page</h1>;

// like defaultReducers, you can also pass in a default state for your page.
export const DefaultState: Object = {
	Accounts: {
		user: {
			id: null,
			username: 'Test User',
		},
	},
};

// Create the main page component
class DashBoard extends Page {
	constructor() {
		super(defaultFeatures, defaultReducers, <RootComponent />, defaultState);
	}
}

export { DashBoard, DashBoard as default };
```

2. Implement your page in your main app: `this is where you can actually start your app add conditionally add in all of your features`

```js
import React from 'react';
import DashBoard from './pages/DashBoard';
import { AccountsFeature } from '../features/Accounts';

// Creating an instance of our page
let DashPage = new DashBoard();

const Features = [];

// optional: get enabled features from local storage
const rawStoredFeatures = localStorage.getItem('Features');

// default features to being enabled or disables, localStorage will always override enabling features, but this optional will set up the users initial view
const rawFeatures = rawStoredFeatures
	? JSON.parse(rawStoredFeatures)
	: {
			Accounts: true,
	  };

// if the feature is enabled, add the feature to the app
if (rawFeatures.Accounts) Features.push(AccountsFeature);

// add the features to the page
// TODO: clean up implementation to just use
//    DashPage.addFeatures(Features).Run();
let MyDash = DashPage.addFeatures(Features);
let Root = MyDash.Run({});
export const App = () => <>{Root}</>;
```

3. Features: this is how you would implement the Accounts feature in the example

```js
import { Feature } from 'featurefull';
import { AuthButton } from './AuthButtonComponent';
import { reducer } from './thisFeaturesReducer';

class AccountsFeature extends AppFeature {
	constructor(App) {
		super(App);
		const Feature = {
			AuthButton,
		};
		// Allows the feature to be used on the main page
		this.setFeatureSettings('Accounts', Feature);
		// Allows the reducer for this feature to be used on the main page
		this.setReducerSettings({
			Accounts: reducer,
		});
	}
}
```
