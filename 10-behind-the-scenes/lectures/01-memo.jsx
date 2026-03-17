// ? Memo (wrapped around component functions)
// * Let's you skip re-endering component if it's props didn't changed
import {memo} from 'react';

// ! Don't overuse Memo

/* // * Use it as high up in the component tree as possible
    > blocking a component execution there will also block all child component executions

* Checking props with memo() costs performance!
    > -don't wrap it around all your components — - it will just add a lot of unnecessary checks

* Don't use it on components where props will change frequently
    → memo() would just perform a meaningless check in such cases (which costs performance) */