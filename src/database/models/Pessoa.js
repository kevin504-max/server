const { DataTypes, Model } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize) {
        return super.init({
            nome: { 
                type: DataTypes.STRING, 
                allowNull: false 
            },
            rua: { 
                type: DataTypes.STRING, 
                allowNull: false 
            },
            numero: { 
                type: DataTypes.INTEGER, 
                allowNull: false 
            },
            complemento: { 
                type: DataTypes.STRING 
            },
            rg: { 
                type: DataTypes.STRING, 
                allowNull: false, 
                unique: true 
            },
            cidade_id: { 
                type: DataTypes.INTEGER, 
                allowNull: false,
                references: {
                    model: 'cidades',
                    key: 'id'
                }
            },
            tipo_id: { 
                type: DataTypes.INTEGER, 
                allowNull: false,
                references: {
                    model: 'tipos',
                    key: 'id'
                }
            },
            created_at: { 
                type: DataTypes.DATE, 
                allowNull: false, 
                defaultValue: DataTypes.NOW 
            },
            updated_at: { 
                type: DataTypes.DATE, 
                allowNull: false, 
                defaultValue: DataTypes.NOW 
            }
        }, {
            sequelize,
            freezeTableName: true,
            modelName: 'Pessoa',
            tableName: 'pessoas',
            timestamps: true
        });
    }
}

module.exports = Pessoa;