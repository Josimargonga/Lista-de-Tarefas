export type TaskProps = {
  id?: string;
  title: string;
  description?: string | null;
  status?: 'TODO' | 'DONE';
  createdAt?: Date;
  updatedAt?: Date;
};

export class Task {
  public props: TaskProps;

  constructor(
    props: Omit<TaskProps, 'id' | 'status' | 'createdAt' | 'updatedAt'>,
  ) {
    this.validate(props);
    this.props = {
      ...props,
      id: undefined,
      description: props.description || null,
      status: 'TODO',
      createdAt: undefined,
      updatedAt: undefined,
    };
  }

  public validate(props: TaskProps) {
    this.titleValidate(props.title);
  }

  private titleValidate(title: string): void {
    if (!title || title.trim().length < 3 || title.trim().length > 100) {
      throw new Error(
        'O título deve ter entre 3 e 100 caracteres e não pode estar vazio.',
      );
    }
  }

  public updateTask(data: Partial<TaskProps>) {
    if (data.title) {
      this.titleValidate(data.title);
      this.props.title = data.title;
    }

    if (data.description) {
      this.props.description = data.description;
    }
  }

  get id(): string | undefined {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string | null {
    return this.props.description || null;
  }

  get status(): 'TODO' | 'DONE' {
    return this.props.status!;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
  get updatedAt(): Date | undefined {
    return this.updatedAt;
  }
}
