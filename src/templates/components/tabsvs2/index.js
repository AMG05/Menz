import { h, Fragment } from 'preact';

const Tabsvstwo = ({ tabsList }) => (
  <div class="tabs">
    <div class="tabs__nav" role="tablist">
      {tabsList.map((tab) => {
        return}
        <a
          id={tab.index}
          class={"tabs__nav-link" + ((page.active) ? " is--active" : "")}
          href={tab.link}
          role="tab"
        >
          {tab.title}
        </a>
      ))}
    </div>
    {tabsList.map((tab, index) => (
      <section
        id={`panel-${index}`}
        class="tabs__section rte"
        role="tabpanel"
        hidden={index !== 0}
      >
        {tab.content}
      </section>
    ))}
  </div>
);

export default Tabsvstwo;
