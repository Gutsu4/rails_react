import "./../css/TaskCreateForm.css";

export default function TaskCreateForm() {
    return (
        <form className="task-form">
            <div className="form-group">
                <label htmlFor="title">タイトル</label>
                <input id="title" type="text" className="form-input" />
            </div>

            <div className="form-group">
                <label htmlFor="description">詳細</label>
                <textarea id="description" className="form-textarea"></textarea>
            </div>

            <button type="submit" className="submit-button">作成</button>
        </form>
    );
}