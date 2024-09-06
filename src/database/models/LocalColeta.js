const { DataTypes, Model } = require('sequelize');

class LocalColeta extends Model {
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
            cidade_id: { 
                type: DataTypes.INTEGER, 
                allowNull: false,
                references: {
                    model: 'cidades',
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
            modelName: 'LocalColeta',
            tableName: 'locais_coleta',
            timestamps: true
        });
    }

    static associate(models) {
        this.belongsTo(models.Cidade, {
            foreignKey: 'cidade_id',
            as: 'cidade'
        });
        this.hasMany(models.Doacao, {
            foreignKey: 'local_id',
            as: 'doacoes'
        });
    }
}

module.exports = LocalColeta;