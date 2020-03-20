# react-microbe-ui

## DEVELOPMENT IS STOPPED! DO NOT USE THIS PACKAGE

We came to the conclusion that the creation of React Components for generating CSS classes of [`microbe-ui`](https://github.com/microbe-ui/microbe-ui) is an overkill. 

This leads to superfluous abstractions which you shall need to learn, understand and remember.

It is much simpler to specify the necessary classes in your components directly using the familiar className prop, rather than import a separate component and manage it using custom props

En example:

```tsx
export const MyComponent: React.FC = () => (
    <div>
        <MyReactComponent className="_pl-def _lg:pl-xl">
            ...
        </MyReactComponent>
    
        <div className="_module-grid _module-grid--1 _md:module-grid--2 _spacer _spacer--lg">
            <div className="_module-cell">...</div>
            <div className="_module-cell">...</div>
            <div className="_module-cell">...</div>
        </div>
    </div>
);
```

---

Keep calm and write clean code ;)  
_Regards, [`microbe-ui`](https://github.com/microbe-ui/microbe-ui) dev team._
