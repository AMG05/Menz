import { h } from 'preact';

const Tabs = ({ tabsList}) =>

<div class="tabs js-tabs">
    <div class="wrap">
        <div class="row">
            <div class="tabs__nav" role="tablist">
                {tabsList.map((tab, index) => {
                    return <a
                        id={`tab-${index}`}
                        class={'tabs__nav-link' + ((tab.active) ? " is--active" : "")}
                        href={`#panel-${index}`}
                        role="tab">
                        {tab.title}
                    </a>
                })
                }
            </div>
        </div>
    </div>
    <div class="tab__container">
        <div class="wrap">
            <div class="row">
                <div class="col xs-12">
                    {tabsList.map((tab, index) => {
             return <section
                        id={`panel-${index}`}
                        class={"tabs__section rte" + ((tab.active) ? " is--active" : "")}
                        role="tabpanel">
                        {tab.content}
                    </section>
                 })}
                </div>
            </div>
        </div>
    </div>
</div>
              
    

export default Tabs;
      



