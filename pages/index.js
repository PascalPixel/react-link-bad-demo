const Index = () => (
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

export default Index;
