import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
	ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Tag from './Tag';
import User from './User';

@Entity('compliments')
export default class Compliments {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	user_sender: string;

	@Column()
	user_receiver: string;

	@JoinColumn({ name: 'user_sender' })
    // muitos users para um elogio
	@ManyToOne(() => User)
	UserSender: User;

	@JoinColumn({ name: 'user_receiver' })
    // muitos users para um elogio
	@ManyToOne(() => User)
	UserReceiver: User;

	@Column()
	tag_id: string;

	// tag_id passa a referenciar o id da entidade Tag
	@JoinColumn({ name: 'tag_id' })
	// muitos compliments(elogios) para uma tag
	@ManyToOne(() => Tag)
	Tag: Tag;

	@Column()
	message: string;

	@CreateDateColumn()
	created_at: Date;

	@CreateDateColumn()
	updated_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
