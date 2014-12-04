var TubeTracker = React.createClass({
    render: function() {
        return (
            <div className="layout">
                <div className="layout__sidebar">
                    <Network />
                </div>
                <div className="layout__content">
                    <Predictions />
                </div>
            </div>
        );
    }
});