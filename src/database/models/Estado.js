const { DataTypes, Model } = require('sequelize');

class Estado extends Model {
    static init(sequelize) {
        return super.init({
            nome: { 
                type: DataTypes.STRING, 
                allowNull: false 
            },
            sigla: { 
                type: DataTypes.STRING, 
                allowNull: false,
                unique: true 
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
            modelName: 'Estado',
            tableName: 'estados',
            timestamps: true
        });
    }

    static associate(models) {
        this.hasMany(models.Cidade, {
            foreignKey: 'estado_id',
            as: 'cidades'
        });
    }
}

module.exports = Estado;