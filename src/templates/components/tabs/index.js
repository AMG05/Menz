import { h } from 'preact';

const Tabs = ({ tabsList }) => (
<div class="tabs js-tabs">
    <div class="wrap">
        <div class="row">
            <div class="tabs__nav tabs__tabslist" role="tablist">
                {tabsList.map((tab, index) => (
                <a
                    id={`tab-${index}`}
                    class={'tabs__nav-link js-tabs__link tabs__tab' + (tab.active ? ' is--active' : '')}
                    href={`#panel-${index}`}
                    role="tab"
                    >
                        {tab.title}
                    </a>
                ))
                }
            </div>
        </div>
    </div>
    <div class="tab__container data__container">
        <div class="wrap">
            <div class="row">
                <div class="col xs-12">
                    {tabsList.map((tab, index) => (
                         <section
                             id={`panel-${index}`}
                             class={'tabs__section rte' + (tab.active ? ' is--active' : '')}
                             role="tabpanel">
                        {tab.content}
                    </section>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>
);
              
 
export default Tabs;


