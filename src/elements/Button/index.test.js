import React from 'react'
import {render} from '@testing-library/react'
import {BrowserRouter as Router, } from 'react-router-dom'
import Button from './index'

test("test button disabled", () => {
    const {container} = render(<Button isDisabled></Button>);
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("test button loading", () => {
    const {container, getByText} = render(<Button isLoading></Button>);
    // getByText(/loading/i);
    expect(getByText(/loading/i));
    expect(container.querySelector("span")).toBeInTheDocument();
});

test("test button a href", () => {
    const {container} = render(<Button type='link' isExternal></Button>);
    expect(container.querySelector("a")).toBeInTheDocument();
});

test("test button link", () => {
    const {container} = render(<Router><Button href='' type='link'></Button></Router>);
    expect(container.querySelector("a")).toBeInTheDocument();
});
