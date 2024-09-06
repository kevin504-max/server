const { DataTypes, Model } = require('sequelize');

class TipoSanguineo extends Model {
    static init(sequelize) {
        return super.init({
            tipo: { 
                type: DataTypes.STRING, 
                allowNull: false 
            },
            fator: {
                type: DataTypes.STRING,
                allowNull: false
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
            modelName: 'TipoSanguineo',
            tableName: 'tipos_sanguineos',
            timestamps: true
        });
    }

    static associate(models) {
        this.hasMany(models.Pessoa, {
            foreignKey: 'tipo_sanguineo_id',
            as: 'pessoas'
        });
    }
}

module.exports = TipoSanguineo;