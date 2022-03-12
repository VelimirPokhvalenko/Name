import {create} from 'react-test-renderer';
import ProfileStatusWithSuperHooks from "./ProfileStatusWithSuperHooks";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("the status should be in props", () => {
        const component = create(<ProfileStatus status={'freedom'} />);
        const instance = component.getInstance();

        expect(instance.state.status).toBe('freedom');
    });
    test("there is <span> which has the right status", () => {
        const component = create(<ProfileStatus status={'freedom'} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('freedom');
    });
    test("there is <span> in the code", () => {
        const component = create(<ProfileStatus status={'freedom'} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children.length).toBe(1);
    });
    test("there is <span> in the code which is just here", () => {
        const component = create(<ProfileStatus status={'freedom'} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNaN();
    });
    test("if we use the callBack, the <input> appears", () => {
        const MockCallBack = jest.fn();
        const component = create(<ProfileStatus status={'freedom'} updateStatus={MockCallBack} />);
        const instance = component.getInstance();
        instance.deactivateAutoFocus();
        expect(MockCallBack.mock.calls.length).toBe(1);
    });
});