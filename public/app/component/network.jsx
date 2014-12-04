var Network = React.createClass({
    getInitialState: function () {
        return {
            collapsible: window.innerWidth <= 800,
            open: false
        };
    },
    handleToggle: function () {
        this.setState({open: !this.state.open});
    },
    handleResize: function () {
        this.setState({collapsible: window.innerWidth <= 800});
    },
    componentWillMount: function () {
        this.debounce = utils.debounceEvent(this.handleResize, 250)
        window.removeEventListener("resize", this.debounce, false);
    },
    componentWillUnmount: function () {
        window.removeEventListener("resize", this.debounce, false);
    },
    render: function () {
        return (
            <div className={"network "}>
                <button type="button" className="network__toggle" ></button>
            </div>
        );
    }
});

var Line = React.createClass({
    render: function () {
        return (
            <form ref="form">
                <fieldset className={"network__line network__line--"}>
                    <legend></legend>
                    <input type="hidden" name="line"  />
                    <select name="station" ref="station"></select>
                    <button type="submit" title="View train times">Go</button>
                </fieldset>
            </form>);
    }
});