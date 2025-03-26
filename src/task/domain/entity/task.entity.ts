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

    Object.freeze(this.props);
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

  public concluirTarefa(): void {
    if (this.props.status === 'DONE') {
      throw new Error('A tarefa já está concluída.');
    }

    this.props = { ...this.props, status: 'DONE' };
  }
}
