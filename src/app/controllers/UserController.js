import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    await User.create(req.body);

    return res.status(200).json({ sucesso: 'Jogador registrado com sucesso!' });
  }

  async index(req, res) {
    const users = await User.findAll({
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(users);
  }
}

export default new UserController();
