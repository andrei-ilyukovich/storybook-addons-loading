import React, { Component, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes, { Validator } from "prop-types";
import styled, { StyledComponent } from "@emotion/styled";

/*tslint:disable-next-line:variable-name*/
const Container: StyledComponent<Props, any, any> = styled.div`
    font-family: RobotoRegular, "Helvetica Neue", sans-serif;
    font-size: 1.6rem;
    padding: 0.8rem;

    & > :first-of-type {
        margin-top: 0;
    }

    h1,
    h2 {
        padding-bottom: 0.3rem;
        border-bottom: 1px solid var(--sdo-theme-grey-light-300);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.25;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    pre code {
        font-size: 1.4rem;
    }
`;
Container.displayName = "Container";

interface Props {
    changelogMarkdown: string;
    active: boolean;
}

/**
 * Component to render changelog markdown
 */
export class Changelog extends Component<Props> {
    private static propTypes: { [key: string]: Validator<any> } = {
        active: PropTypes.bool.isRequired,
        changelogMarkdown: PropTypes.string.isRequired
    };

    public render(): ReactNode {
        const { active } = this.props;
        return active ? (
            <Container>
                <ReactMarkdown source={this.props.changelogMarkdown}></ReactMarkdown>
            </Container>
        ) : /*tslint:disable-next-line:no-null-keyword*/
        null;
    }
}
