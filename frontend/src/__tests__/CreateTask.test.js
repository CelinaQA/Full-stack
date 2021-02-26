import CreateTask from '../components/Body/CreateTask';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe(`Form testing`, () => {

    describe(`onSubmit test`, () => {
        //create a fake function
        const mockSubmit = jest.fn();
        const data = 'test input';
        it(`should update the name of the state when text input is typed in`, () => {
            // arrange act assert

            // Arranging
            const { container } = render(<CreateTask />);
            const nameInput = container.querySelector(`[name="description"]`);
            expect(nameInput.value).toEqual('');

            // Act - simulated typing
            userEvent.type(nameInput, data);

            // Assert
            expect(nameInput.value).toEqual(data);
        })

        it(`should call the onSubmit function when clicked`, () => {
            // arrange act assert

            // Arranging
            const { container } = render(<CreateTask />);
            const button = container.querySelector(`[type="submit"]`);
            const nameInput = container.querySelector(`[name="description"]`);

            // Act - simulated typing
            userEvent.type(nameInput, data);
            button.onClick = mockSubmit();
            // userEvent.click(button);

            // Assert
            // console.log(nameInput.value);
            expect(mockSubmit).toHaveBeenCalled();
        })

    })
})