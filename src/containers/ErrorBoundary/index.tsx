import React, { Component } from 'react'


class ErrorBoundary extends Component<{}, { isError: boolean, errorMsg: string }>  {
    constructor(props: any) {
        super(props);
        this.state = {
            isError: false,
            errorMsg: ""
        };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return {
            isError: true,
            errorMsg: error.toString()
        };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    // componentDidUpdate(prevProps: any, prevState: any) {
    //     if (prevState.isError) {
    //         this.forceUpdate()
    //         this.setState({
    //             isError: false
    //         })
    //     }
    //     // console.log('there was an error in the parent component')
    //     // this.forceUpdate()

    // }

    render() {
        if (this.state.isError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>Something went wrong.</h1>

                    {this.state.errorMsg}

                </div>
            );
        }

        return this.props.children
    };
}


export default ErrorBoundary