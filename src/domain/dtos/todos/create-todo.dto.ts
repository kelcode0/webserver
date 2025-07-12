export class CreateTodoDto {
  constructor(public readonly text: string) {}

  public static create(props: {
    [key: string]: any;
  }): [string?, CreateTodoDto?] {
    const { text } = props;
    if (!text) return ["text property is required", undefined];
    return [undefined, new CreateTodoDto(text)];
  }
}
