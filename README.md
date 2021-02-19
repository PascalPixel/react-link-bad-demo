## Input

```jsx
export default () => (
  <>
    <a href="/one">
      <span>
        One
        <a href="/two">
          <span>Two</span>
        </a>
      </span>
    </a>
    <a href="/three">
      <span>Three</span>
    </a>
    <a href="/four">
      <div>Four</div>
    </a>
    <a href="/five">
      <div>
        <div>Five</div>
      </div>
    </a>
    <a href="/six">
      <div>
        <div>
          Six
          <a href="/seven">
            <div>
              <div>Seven</div>
            </div>
          </a>
        </div>
      </div>
    </a>
  </>
);
```

## Expected Output

```html
<div id="__next">
  <a href="/one">
    <span>
      One
      <a href="/two">
        <span>Two</span>
      </a>
    </span>
  </a>
  <a href="/three">
    <span>Three</span>
  </a>
  <a href="/four">
    <div>Four</div>
  </a>
  <a href="/five">
    <div>
      <div>Five</div>
    </div>
  </a>
  <a href="/six">
    <div>
      <div>
        Six
        <a href="/seven">
          <div>
            <div>Seven</div>
          </div>
        </a>
      </div>
    </div>
  </a>
</div>
```

## Actual Output

```html
<div id="__next">
  <a href="/one">
    <span>One</span>
  </a>
  <a href="/two">
    <span>Two</span>
  </a>
  <a href="/three">
    <span>Three</span>
  </a>
  <a href="/four">
    <div>Four</div>
  </a>
  <a href="/five">
    <div>
      <div>Five</div>
    </div>
  </a>
  <a href="/six"></a>
  <div>
    <a href="/six"></a>
    <div>
      <a href="/six">Six</a>
      <a href="/seven">
        <div>
          <div>Seven</div>
        </div>
      </a>
    </div>
  </div>
</div>
```
