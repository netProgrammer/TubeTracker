var Network = React.createClass({
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