import * as C from './syles';

export const AddArea = () => {
    return (
        <C.Container>
            <div className="image">➕</div>
            <input
            type="text"
            placeholder="Adicione uma tarefa"
            />
        </C.Container>
    );
}